import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mydomainname.app",
  appName: "my-app-name",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.0.24:3000",
    cleartext: true,
  },
};

export default config;
