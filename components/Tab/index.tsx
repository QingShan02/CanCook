import { Tabs } from "antd";

const Tab = () => {
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    label: 'Dinh dưỡng',
                    key: '1',
                    children: 'Tab 1',
                },
                {
                    label: 'Mẹo vặt',
                    key: '2',
                    children: 'Tab 3',
                },
            ]} />
    );
}
export default Tab;