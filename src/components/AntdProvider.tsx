"use client";

import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import zhCN from "antd/locale/zh_CN";

export default function AntdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: "#c8956c",
            colorLink: "#c8956c",
            fontFamily: "inherit",
            borderRadius: 14,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
