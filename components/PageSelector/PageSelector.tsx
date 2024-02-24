import { usePages } from "@/contexts/pages.context";
import { Button, Row, Space } from "antd";

export type PageSelectorProps = {};
export default function PageSelector(props: PageSelectorProps) {
  const { pages, currentPageId, setCurrentPageId } = usePages();
  return (
    <Row style={{ paddingLeft: 14 }}>
      <Space>
        {pages.map((page) => (
          <Button
            key={page.path}
            htmlType="button"
            onClick={() => setCurrentPageId(page.id)}
            type={page.id === currentPageId ? "primary" : "default"}
          >
            {page?.path}
          </Button>
        ))}
      </Space>
    </Row>
  );
}
