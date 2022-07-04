import classes from "./About.module.scss";
import React from "react"
import {useEffect, useState} from "react"
import {useAppDistpatch, useAppSelector} from "../../Store/Store";
import {fetchUsers} from "../../Store/Features/UserSlice";
import {useFetch} from "../../Api/Http";
import {UserResponseModel} from "../../Types/User";
import url from "../../Api/Url";
import styled from "styled-components/macro";

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-family: "Anek Latin", sans-serif;
`
const StyledDiv = styled.div`
  font-family: "Anek Latin", sans-serif;
`

const About = () => {

    const [page, setPage] = useState<number>(1)
    const dispatch = useAppDistpatch()
    const user = useAppSelector(state => state.users)

    useEffect(() => {


        console.log("fetchUsers")
        dispatch(fetchUsers(1))
        console.log(user)

    }, []);

    return (<div className={classes.cards}>
        {user.loading && <h1>"Loading..."</h1>}
        {user.error && <h1>"Error..."</h1>}

        {user.data && user.data.data.map((e, i) => (
            <div className={classes.card} key={i}>
                <img src={e.avatar} className={classes.card__avatar} alt=""/>
                <StyledInfo>
                    Name: {e.first_name + " " + e.last_name}
                    <StyledDiv>Email: {e.email}</StyledDiv>
                </StyledInfo>
            </div>))}

    </div>);

}
export default About;