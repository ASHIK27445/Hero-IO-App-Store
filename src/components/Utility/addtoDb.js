const getStoredApp = () => {
    const storedApp = localStorage.getItem("Installed")
    if(storedApp){
        const storedAppData = JSON.parse(storedApp)
        return storedAppData
    }
    else{
        return []
    }
}

const addToDB = (app) => {
    const stored = getStoredApp()
    const alreadyExist = stored.find(item => item.id === app.id)
    if(alreadyExist){
        alert("Already Exist")
    }
    else{
        stored.push(app)
        const data = JSON.stringify(stored)
        localStorage.setItem("Installed", data)
    }
}

const uninstallApp = (id) => {
    const stored = getStoredApp()
    const update = stored.filter(item => item.id !== id)
    localStorage.setItem("Installed", JSON.stringify(update))
    return update
}

export {addToDB ,getStoredApp, uninstallApp}