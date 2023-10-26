I replaced "start": "expo start" with this: "set NODE_OPTIONS=--openssl-legacy-provider && expo start " and it start working (source: `https://github.com/expo/expo-cli/issues/4037`)
##Comands:
1.npm start - start the Expo development tools
