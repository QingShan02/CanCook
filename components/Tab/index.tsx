import { Tabs } from "antd";
import Card from "../Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { database, onValue, ref } from "@/util/Firebase/firebase";

const Tab = ({comment}) => {
    const [aofcate, setAofcate] = useState([]);
    useEffect(() => {
        getArticleList("L01");
    }, []);
    const getArticleList = async (e?) => {
        try {
            const res = await axios.get(`/api/category/${e}`);
            if (res.data) {
                setAofcate(res.data.listposts);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const onTabClick = async (e) => {
        getArticleList(e);

    }
    return (
        <Tabs
            type="card"
            defaultActiveKey="1"
            items={[
                {
                    label: 'Dinh dưỡng',
                    key: 'L01',
                    children: aofcate.map((a, index) => {
                        return (<Card key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`}
                            sumComment={Object.keys(comment[a.id]).length}
                            title={`${a.title}`} view={a.view}></Card >)
                    }),
                },
                {
                    label: 'Mẹo vặt',
                    key: 'L04',
                    children: aofcate.map((a, index) => {
                        return (<Card key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`}
                            sumComment={Object.keys(comment[a.id]).length}
                            title={`${a.title}`} view={a.view}></Card >)
                    }),
                },
            ]}
            onChange={onTabClick} />
    );
}
export default Tab;