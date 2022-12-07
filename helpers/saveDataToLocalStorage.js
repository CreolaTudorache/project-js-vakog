const setDefaultLocalStorageData = () => {
    localStorage.setItem('userAnswers', JSON.stringify({
        kinestezicCount: 0,
        audioCount: 0,
        visualCount: 0,
        smellCount: 0,
        tasteCount: 0
    }))
}

const localStorageSetter = (answerType) => {
    const localStorageData = JSON.parse(localStorage.getItem('userAnswers'))
    return localStorage.setItem('userAnswers', JSON.stringify({...localStorageData, [answerType]: localStorageData[answerType] + 1}))
}

const updateLocalStorageData = (answerType) => {
    switch (answerType) {
        case 'visual': localStorageSetter('visualCount')
            return
        case 'audio': localStorageSetter('audioCount')
            return
        case 'kinestezic': localStorageSetter('kinestezicCount')
            return
        case 'smell': localStorageSetter('smellCount')
            return
        case 'taste': localStorageSetter('tasteCount')
            return
        default: return
    }
}

const getLocalStorageData = (type) => {
    const localStorageData = JSON.parse(localStorage.getItem('userAnswers'))
    switch (type) {
        case 'visual': return localStorageData.visualCount
        case 'audio': return localStorageData.audioCount
        case 'kinestezic': return localStorageData.kinestezicCount
        case 'smell': return localStorageData.smellCount
        case 'taste': return localStorageData.tasteCount
    }
}

const getLocalStorageCurrentQuestion = () => {
    return JSON.parse(localStorage.getItem('currentAnswerAndQuestion'))
}