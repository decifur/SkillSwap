export const getUserTheme = ()=>{
    const theme = localStorage.getItem('applied-theme')
    return theme
}