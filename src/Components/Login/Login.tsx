import React from "react"
import {Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import classes from "./Login.module.scss";

import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import isValidEmail from "../../Utils/IsValidEmail";
import Accordion from "../../Utils/Accordion/Accordion";
import AccordionItems from "../../Utils/Accordion/AccordionData";


// Use <MyForm /> wherevs
const Login = () => (
    <div className={classes.login__grid}>
        <div className={classes.login__grid_item_1}>
            <Accordion items={AccordionItems} />
        </div>
        <div className={classes.login__grid_item_2}>2</div>

        {/*<h1 className={classes.login__header}>Login</h1>
        */}
        {/*<MyForm message="" />*/}
    </div>
);

export default Login;
