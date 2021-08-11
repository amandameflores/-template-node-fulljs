import darthError from '../../../assets/images/elements/404_darth-vader.png';
import errorBg from '../../../assets/images/background/bg3.jpeg'; 

let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}
let error = `
<div class="error-default" style="background-image: url('${errorBg}')">
    <div classss="container">
        <h1>404 error - Page Not Found</h1>
        <a href="http://localhost:8080/#section-one">
            <img src="${darthError}" alt="Vader error">
        <a>
        <h2>Content does not exist</h2>
        <h3>Click on Darth Vader and try again.</h3>
    </div>
</div>
`

export default Error404;