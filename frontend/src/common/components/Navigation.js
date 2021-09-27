import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => (
    <NaviDiv>
     
     <NaviList>
            <NaviItem><Link to='/Counter'style={{textDecorationLine:'none',color:'black'}}><strong>Counter</strong></Link></NaviItem>
            <NaviItem><Link to='/Todo'style={{textDecorationLine:'none',color:'black'}}><strong>Todo</strong></Link></NaviItem>
            <NaviItem><Link to='/Math'style={{textDecorationLine:'none',color:'black'}}><strong>Math</strong></Link></NaviItem>
            <NaviItem><Link to='/Linear'style={{textDecorationLine:'none',color:'black'}}><strong>Linear</strong></Link></NaviItem>
            <NaviItem><Link to="/Nonlinear"style={{textDecorationLine:'none',color:'black'}}><strong>NonLinear</strong></Link></NaviItem>
            <NaviItem><Link to="/BruteForce"style={{textDecorationLine:'none',color:'black'}}><strong>Brute Force</strong></Link></NaviItem>
            <NaviItem><Link to="/DivideConquer"style={{textDecorationLine:'none',color:'black'}}><strong>Divide & Conquer</strong></Link></NaviItem>
            <NaviItem><Link to="/Greedy"style={{textDecorationLine:'none',color:'black'}}><strong>Greedy</strong></Link></NaviItem>
            <NaviItem><Link to="/DynamicProgramming"style={{textDecorationLine:'none',color:'black'}}><strong>Dynamic Programming</strong></Link></NaviItem>
            <NaviItem><Link to="/BackTracking "style={{textDecorationLine:'none',color:'black'}}><strong>Back Tracking</strong></Link></NaviItem>
        </NaviList>
    </NaviDiv>
)
export default Navigation


const NaviDiv = styled.div`
    padding-bottom: 30px;
    margin-bottom: 100px;
    
`
const NaviList = styled.ul`
    display: flex;
    width: min-content;
    height: 10px;
    margin: 30px
    
`

const NaviItem = styled.li`
    width: 110px;
    color: none;
    font-family: "ls";
    font-size: 1.0em;
    list-style: none;
`
