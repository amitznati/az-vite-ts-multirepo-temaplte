import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

export const getBaseConfig = ({ plugins = [], lib }) =>
  defineConfig({
    plugins: [react(), ...plugins],
    build: {
      lib,
      rollupOptions: {
        external: isExternal,
        output: {
          globals: {
            react: "React",
            'react-redux': 'ReactRedux',
            'react-router-dom': 'ReactRouterDOM',
            'react/jsx-runtime': 'jsxRuntime',
            'react-dom': 'ReactDOM',
            'common-components/src': 'CommonComponents',
            'sdk/src': 'SDK',
            'select-account/src': 'SelectAccount',
            '@reduxjs/toolkit': 'ReduxToolkit',
            "redux": "Redux",
            "redux-persist": "ReduxPersist",
            "reselect": "Reselect",
            "redux-persist/es/storage/session": "ReduxPersistSessionStorage",
            "@mui/material/styles": "MaterialUIStyles",
            "@mui/material": "MaterialUI",
            "@mui/icons-material": "MaterialUIIcons",
            "clsx": "Clsx",
            "axios": "Axios",
            "tailwind-merge": "TailwindMerge",
          },
        },
      },
    },
  });
