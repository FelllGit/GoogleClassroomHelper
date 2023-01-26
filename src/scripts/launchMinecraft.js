async function launchMinecraft(user) {
    const data = window.require("/Users/danilpalienko/Sites/localhost/minecraftrevolution/minecraftrevolution.client/1.16.5.json");
    const path = window.require("path");
    const fs = window.require("fs");
    const os = window.require("os");

    //SystemVars
    const cpuArch = os.arch();
    const appFolder = `${process.cwd()}/`;

    function getAllFiles(dirPath, arrayOfFiles) {
        let files = fs.readdirSync(dirPath);

        arrayOfFiles = arrayOfFiles || [];

        files.forEach(function (file) {
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
            } else {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        });
        return arrayOfFiles;
    }

    const { spawn } = window.require("child_process");

    let java = "";
    cpuArch === "x86"
        ? (java = `${appFolder}/java/macos/x86/jre.bundle/Contents/Home/bin/java`)
        : cpuArch === "arm64"
        ? (java = `${appFolder}/java/macos/arm64/jre.bundle/Contents/Home/bin/java`)
        : console.log("Some shit happended");

    const minecraftDirectory = "/Users/danilpalienko/minecraftGame2";

    let libraryPath = `${minecraftDirectory}/libraries_arm/`;
    

    let libraries = `-Djava.class.path=`;

    const allFiles = getAllFiles(libraryPath);

    libraries += allFiles.filter(file => !file.endsWith(".DS_Store")).join(":");
    libraries += `:${minecraftDirectory}/versions/1.16.5/1.16.5.jar`;

    const javaParameters = `-Xmx${1024 * 5}M`;
    const additions =
        "-XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump";
    const javaNatives = `-Djava.library.path=${minecraftDirectory}/natives/arm/`;
    const orgNatives = `-Dorg.lwjgl.librarypath=${minecraftDirectory}/natives/arm/`;

    const className = "net.minecraft.client.main.Main";
    const windowSize = "--width 1280 --height 720";
    const username = `--username ${user.name}`;
    const version = "--version 1.16.5";
    const gameDirectory = `--gameDir ${minecraftDirectory}`;
    const assetsDirectory = `--assetsDir ${minecraftDirectory}/assets/`;
    const assetsIndex = "--assetIndex 1.16";
    const UUID = "--uuid 123123123";
    const accessToken = "--accessToken uuu";
    const other = "--userType mojang --versionType Vanilla";
    const library_path = `process.env.LD_LIBRARY_PATH=${minecraftDirectory}/natives/`;

    let args = `-XstartOnFirstThread ${javaParameters} ${additions} ${javaNatives} ${orgNatives} ${libraries} ${className} ${windowSize} ${username} ${version} ${gameDirectory} ${assetsDirectory} ${assetsIndex} ${UUID} ${accessToken} ${other}`;

    const minecraft = spawn(java, args.split(" "), {
        stdio: "inherit",
    });
}

export default launchMinecraft;
