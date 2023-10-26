I replaced "start": "expo start" with this: "set NODE_OPTIONS=--openssl-legacy-provider && expo start " and it start working (source: `https://github.com/expo/expo-cli/issues/4037`)

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
2. npm run lint - check linting rules