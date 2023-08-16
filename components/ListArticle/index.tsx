"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { Modal, Table } from "antd";
const ListArticle = () => {
    const [data, setData] = useState<any[]>();
    const [pageCurrent, setPageCurrent] = useState(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const deleteItem = async (id) => {
        await axios.delete("/api/article/" + id);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/article`);
                const data = await response.json();
                setData(data);
                console.log(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [pageCurrent, deleteItem]);

    const columns = [
        {
            key: "1",
            title: "Tiêu đề",
            render: (record: any) => {
                return (
                    <div>
                        <p>{record.title}</p>
                        <p style={{ fontSize: "12px", fontWeight: "lighter" }}>Nhân viên: {record.staffname}</p>
                    </div>
                );
            },
        },
        {
            key: "2",
            title: "Ngày đăng",
            dataIndex: "createdate",
        },
        {
            key: "3",
            title: "Hành động",
            render: (record: any) => {
                return (
                    <>
                        <Link
                            href={{
                                pathname: "/admin/article/" + record.id
                            }}
                        >
                            <EditOutlined />
                        </Link>

                        <DeleteOutlined
                            onClick={() => {
                                onDeleteProduct(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const onDeleteProduct = (record: any) => {
        Modal.confirm({
          title: "Bạn có chắc xóa món ăn này chứ?",
          okText: "Có",
          cancelText:"Hủy",
          okType: "danger",
          onOk: () => {
            setIsDeleting(true);
            deleteItem(record.id);
          },
        });
      };

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                pageSize: 5,
                total: data?.length || 0,
                current: pageCurrent + 1,
                onChange: page => setPageCurrent(page - 1),
            }}
        />
    );
}
export default ListArticle;
