
How to build:
#connect phone
yarn
expo start
#type in another temrinal
cd android
./gradlew installDebug


#release build
open project in Android Studio and do Refactor->AndroidX
run migrating script on node_modules
put keystore in android/app and set proper keystore params in android/gradle.properties
cd android
./gradlew assembleRelease
#install release
adb install app/build/outputs/apk/release/app-release.apk
