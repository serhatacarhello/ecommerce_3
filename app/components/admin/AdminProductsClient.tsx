"use client";

import firebaseApp from "@/libs/firebase";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Product } from "@prisma/client";
import axios from "axios";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
} from "firebase/storage";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

interface AdminProductsClientProps {
  products: Product[];
}

const AdminProductsClient: React.FC<AdminProductsClientProps> = ({
  products,
}) => {
  const storage = getStorage(firebaseApp); // for deleting image process
  const router = useRouter();
  let rows: any = [];

  if (products)
    rows = products.map((product) => ({
      id: product.id,
      brand: product.brand,
      category: product.category,
      image: product.image,
      inStock: product.inStock,
      name: product.name,
      price: product.price,
    }));

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 170,
      headerClassName: "bg-blue-300 ",
    },
    {
      field: "name",
      headerName: "Name",
      width: 130,
      headerClassName: "bg-blue-300 ",
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
      type: "number",
      headerClassName: "bg-blue-300 ",
    },
    {
      field: "category",
      headerName: "Category",
      width: 130,
      headerClassName: "bg-blue-300 ",
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 130,
      headerClassName: "bg-blue-300 ",
    },
    {
      field: "inStock",
      headerName: "inStock",
      width: 100,
      renderCell(params) {
        return (
          <div>
            {params.row.inStock == true ? (
              <FaCheck size={20} className="text-green-500" />
            ) : (
              <FaTimes size={20} className="text-red-500" />
            )}
          </div>
        );
      },
      headerClassName: "bg-blue-300 ",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      type: "actions",
      renderCell(params) {
        return (
          <button
            title="Delete"
            className="w-full"
            onClick={() => handleDelete(params.row.id, params.row.image)}
          >
            <MdOutlineDelete size={20} className="text-red-500" />
          </button>
        );
      },
      headerClassName: "bg-blue-300 ",
    },
  ];

  const handleDelete = useCallback(
    async (id: string, image: any) => {
      console.log("🚀 ~ file: AdminProductsClient.tsx:91 ~ image:", image);
      const handleDeleteImgFunc = async () => {
        try {
          const imageRef = ref(storage, image);
          await getDownloadURL(imageRef);
          toast.success("Deleting process started.");
          await deleteObject(imageRef)
            .then(() => {
              router.refresh();
              toast.success("image successfully deleted from firestore");
            })
            .catch((error: any) => {
              toast.error(error.message);
            });
        } catch (error: any) {
          console.log(
            "🚀 ~ file: AdminProductsClient.tsx:106 ~ handleDeleteImgFunc ~ error:",
            error
          );

          toast.error(error.message);
        }
      };
      await handleDeleteImgFunc();
      // now lets try to delete obj from prisma db
      console.log(
        "🚀 ~ file: AdminProductsClient.tsx:119 ~ `/api/product/${id}`:",
        `/api/product/${id}`
      );
      await axios
        .delete(`/api/product/${id}`)
        .then(() => {
          toast.success("Product successfully deleted");
          router.refresh();
        })
        .catch((error: any) => {
          toast.error(error.message);
        });
    },
    [router, storage]
  );
  return (
    <div className="w-full">
      <div className="h-full bg-white w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getCellClassName={(params) => {
            if (params.field === "id") {
              return "hover:text-blue-500";
            }
            return "";
          }}
        />
      </div>
    </div>
  );
};

export default AdminProductsClient;
