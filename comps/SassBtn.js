import { useTheme } from "../utils/provider";

const SassBtn=({
    
})=>{
    const {theme}= useTheme();
    console.log(theme)
return <div className={`sass-btn-${theme}`}>
    <header> SassBtn</header>
    <content> This component is using the method of Sass.</content>
    <img src="http://placekitten.com/75/75"/>   
</div>
}

export default SassBtn;