# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
# expolocation-app

アプリ名前：WAIN（wake up on the train）

プロジェクト名：日本電子専門学校　Webアプリ制作

実装期間：2024年5月から2024年7月（3ヶ月)

制作人数：3人（デザイナー1人、エンジニア2人）

担当：エンジニア

使用ツール：Visual Studio Code/Expo GO/Figma

使用技術
react-native / expo / react-native-picker-select / react-native-maps / expo-location/ react-native-vector-icons / MaterialCommunityIcons / react-native-vector-icons / AntDesign / expo-av / expo-router / @expo-google-fonts/roboto-condensed / https://express.heartrails.com/ (api)


## 概要
### 電車で寝過ごし防止アラーム

電車でよく寝過ごしてしまう。

そんな方に使っていただきたいアプリです。

降りたい駅を設定し、指定した範囲に自分が入るとアラームがなるようになっています。

また、アラームは計算問題が解き終わるまで終わりません。

なのでバッチリ目を覚ますことができ、寝過ごす心配はありません。


### コンテンツ

・地点検索


・アラーム設定


・計算問題



## こだわり


・範囲内に入ったらアラームが鳴り続ける機能を4パターンで出しました。


・apiから駅の緯度と経度座標を取ります


・駅からの設定した半径距離を出して設定できるようにします


・スマホexpoアプリマップの表示すること



## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
