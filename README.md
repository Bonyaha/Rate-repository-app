<!-- I replaced "start": "expo start" with this: "start": т"set NODE_OPTIONS=--openssl-legacy-provider && expo start " and it started working (source: `https://github.com/expo/expo-cli/issues/4037`) -->


-- I put this in vscode settings:	
```"eslint.workingDirectories": [
			{
				"mode": "auto"
			}
		],
```
I did this because Eslint gave me an error in App.js file in this line: **import { StatusBar } from 'expo-status-bar'**
## Comands:
1.npm start - start the Expo development tools
2. npm run lint - check linting rules2. 
3. how to connect react native debugger with emulator android - on Android emulator, you need to press ctrl + M and press 'Debug remote JS'
4. how to set the React Native packager port to 19000 - Ctrl+T (without it it won't be able to connect to emulator)