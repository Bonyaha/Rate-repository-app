<!-- I replaced "start": "expo start" with this: "start": т"set NODE_OPTIONS=--openssl-legacy-provider && expo start " and it started working (source: `https://github.com/expo/expo-cli/issues/4037`) -->


-- I put this in vscode settings:	
```"eslint.workingDirectories": [
			{
				"mode": "auto"
			}
		],
```
I did this because Eslint gave me an error in App.js file in this line: **import { StatusBar } from 'expo-status-bar'**

I've added file advancedFeatures.ini in my computer to the path C:/Users/your user name/.android with this content:
Vulkan = off
GLDirectMem = on

it was neccesary because Chrome browser didn't open on emulator

## Comands:
1.npm start - start the Expo development tools
2. npm run lint - check linting rules2. 
3. how to connect react native debugger with emulator android - on Android emulator, you need to press ctrl + M and press 'Debug remote JS'
4. how to set the React Native debugger port to 19000 - Ctrl+T (without it it won't be able to connect to emulator)
5. It's important to always opent React Native debugger before opening emulator. Without it, it won't open and will give an error.