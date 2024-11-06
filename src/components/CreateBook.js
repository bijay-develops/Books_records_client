import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const CreateBook = (props) => {
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "", 
        isbn: "", 
        author: "",
        description: "",
        published_date: "",
        publisher: "",
    });

    const onChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    };

    



} 