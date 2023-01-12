import React, {useState} from 'react';
import './Home.css';
import salad from '../../assets/img/fotoHome.webp';
import FormLabel from "../../components/form-label/FormLabel";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";
import axios from "axios";

function Home() {
    const {handleSubmit, formState: {errors}, register} = useForm({mode: 'onBlur'});
    const [productData, setProductData] = useState({})
    const [toggleDiv, setToggleDiv] = useState(false)
    const [error, toggleError] = useState(false);


    async function onFormSubmit(data) {
        try {
            const result = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=6681e6ff&app_key=247487ba48a1dff6c6c241eae12c5251&nutrition-type=logging&ingr=${data.product}`)
            setProductData(result.data)
            setToggleDiv(true)

        } catch (e) {
            console.error(e)
            toggleError(true);
        }
    }
    return (
        <div className="homepage-container">
            <article className="left-container">
                <section>
                <h1>Koolhydraten teller</h1>
                <p>Op koolhydraten teller kunt u zien hoeveel koolhydraten in producten zitten. Ook vindt u het
                    aantal calorieën en de hoeveelheid vet. Dit is vooral van belang voor mensen met een low carb dieet
                    of mensen die het Atkins dieet volgen.
                </p>
                <p><em>Let op: 👀 de producten dienen in het engels ingevoerd te worden.</em></p>
                <form className="home-form-container" onSubmit={handleSubmit(onFormSubmit)}>
                    <FormLabel
                        name="product" inputType="text" placeHolder="banana" size="50"
                        register={register} errors={errors} validationObject={{
                        required: "input mag niet leeg zijn"}}
                    />
                    <Button  name="zoeken" type="submit"/>
                </form>
                {error && <p className="error">Er ging iets mis!! uw gekozen prodruct staat niet in onze data</p>}

                </section>

                </article>
            <aside>
                {!toggleDiv ?
                    <div className="img-container"><img src={salad} alt=""  width="575px"/></div> :
                    <div className="right-container">
                        {Object.keys(productData).length > 0 &&
                                <div className="product-name-container">
                                    <h1>Voedingstoffen</h1>
                                    <p><strong>Deze waarden gelden voor het onbereide product.</strong></p>
                                    <h2>{productData.ingredients[0].text}</h2>
                                    <div className="product-container">
                                        <div className="product-name">
                                            <p>Koolhydraten</p>
                                            <p>Energie</p>
                                            <p>Vet</p>
                                            <p>Vezels</p>
                                            <p>Proteïne</p>
                                            <p>Zout</p>
                                        </div>
                                        <div className="product-amount">
                                            <p>{Math.round(productData.totalNutrients.CHOCDF.quantity * 100) / 100} {productData.totalNutrients.CHOCDF.unit}</p>
                                            <p>{Math.round(productData.totalNutrients.ENERC_KCAL.quantity * 100) / 100} {productData.totalNutrients.ENERC_KCAL.unit}</p>
                                            <p>{Math.round(productData.totalNutrients.FAT.quantity * 100) / 100} {productData.totalNutrients.FAT.unit}</p>
                                            <p>{Math.round(productData.totalNutrients.FIBTG.quantity * 100) / 100} {productData.totalNutrients.FIBTG.unit}</p>
                                            <p>{Math.round(productData.totalNutrients.PROCNT.quantity * 100) / 100} {productData.totalNutrients.PROCNT.unit}</p>
                                            <p>{Math.round(productData.totalNutrients.NA.quantity * 100) / 100} {productData.totalNutrients.NA.unit}</p>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                }
            </aside>
        </div>
    );
}

export default Home;