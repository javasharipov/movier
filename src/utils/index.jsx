import React from 'react';
import { Suspense } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const Loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{ fontSize: 48 }}
                        spin
                    />
                }
            />
        </div>
    );
};

export const SuspenseContainer = ({ children }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
