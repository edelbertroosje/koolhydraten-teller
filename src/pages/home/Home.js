import React, {useEffect, useState} from 'react';
import './Home.css';
import salad from '../../assets/img/foto-home.png';
import FormLabel from "../../components/form-label/FormLabel";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";
import axios from "axios";

function Home() {
    const {handleSubmit, formState: {errors}, register} = useForm({mode: 'onBlur'});
    const [productData, setProductData] = useState({})
    const [toggleDiv, setToggleDiv] = useState(false)

    async function onFormSubmit(data) {
        try {
            const result = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=6681e6ff&app_key=247487ba48a1dff6c6c241eae12c5251&nutrition-type=logging&ingr=${data.Voornaam}`)
            console.log(result.data)
            setProductData(result.data)
            setToggleDiv(true)
            console.log(data)

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="homepage-container">
            <div className="left-container">
                <h1>Koolhydraten teller</h1>
                <p>Op koolhydraten teller.nl kunt u zien hoeveel koolhydraten in producten zitten. Ook vindt u het
                    aantal calorieën en de hoeveelheid vet. Dit is vooral van belang voor mensen met een low carb dieet
                    of mensen die het Atkins dieet volgen.
                </p>
                <form className="home-form-container" onSubmit={handleSubmit(onFormSubmit)}>
                    <FormLabel
                        name="Voornaam" inputType="text" placeHolder="banaan" size="50"
                        register={register} errors={errors} validationObject={{
                        required: "input mag niet leeg zijn",
                    }}
                    />
                    <Button name="zoeken" type="submit"/>
                </form>
            </div>
            <div className="right-container">
                {!toggleDiv ?
                    <div><img src={salad} alt=""/></div> :
                <div>
                    {Object.keys(productData).length > 0 &&
                        <section>

                            <div>
                                <h1>Voedingstoffen</h1>
                                <p>Deze waarden gelden voor het onbereide product.</p>
                                <h1>{productData.ingredients[0].text}</h1>
                                <ul>
                                    <p>{productData.totalNutrients.ENERC_KCAL.label} {Math.round (productData.totalNutrients.ENERC_KCAL.quantity*100)/100} {productData.totalNutrients.ENERC_KCAL.unit}</p>
                                    <p>{productData.totalNutrients.FAT.label} {Math.round (productData.totalNutrients.FAT.quantity*100)/100} {productData.totalNutrients.FAT.unit}</p>
                                    <p>{productData.totalNutrients.FIBTG.label}(vezels) {Math.round (productData.totalNutrients.FIBTG.quantity*100)/100} {productData.totalNutrients.FIBTG.unit}</p>
                                    <p>{productData.totalNutrients.PROCNT.label} {Math.round (productData.totalNutrients.PROCNT.quantity*100)/100} {productData.totalNutrients.PROCNT.unit}</p>
                                    <p>{productData.totalNutrients.NA.label}(zout) {Math.round (productData.totalNutrients.NA.quantity*100)/100} {productData.totalNutrients.NA.unit}</p>
                                </ul>
                            </div>
                        </section>
                    }
                </div>
                }

            </div>
        </div>
    );
}

export default Home;