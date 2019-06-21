import config from './config'
import {push} from 'react-router-redux'

const baseUrl = config.api

function GetToken() {
    try {
        return localStorage.getItem("xaccess")
    } catch (e) {}
    return ""
}

export function SetToken(token) {
    try {
        localStorage.setItem("xaccess", token)
    } catch (e) {}
    return
}


 function CheckStatus(response, dispatch) {
    if(response.status === 401 ||  response.status === 403  || response.status === 400) {
        return dispatch(push('/'))
    }
    if (!response.ok) {
        return Promise.reject(new Error(response.statusText || response.status || 'Status not OK'))
    }
    return response
}

function ParseJSON(response) {
    return response.json()
}

function Fetch(dispatch, url, opts) {
    return fetch(baseUrl + url, {
        ...opts,
        headers: {
        },
    })
    .then((response) => (CheckStatus(response, dispatch)))
    .then(ParseJSON)
}

function QueryParams(params = {}) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&')
}

export function Get(dispatch, url, opts) {
    return Fetch(dispatch, url + '?' + QueryParams(opts), {
        method: 'get',
    })
}

export function Post(dispatch, url, body) {
    return Fetch(dispatch, url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}


export function BasicGet(dispatch, url, opts) {
    return fetch(baseUrl + url + '?' + QueryParams(opts), {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': GetToken(),
        },
    })
    .then((response) => (CheckStatus(response, dispatch)))
    .then(response => response.blob())
    .then(blob => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "report.xlsx";
        a.click();
    });
}


export function Upload(url, formData) {
    return fetch(baseUrl + url, {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': GetToken(),
        },
    })
    .then(CheckStatus)
    .then(ParseJSON)
}

export function Delete(dispatch, url) {
    return fetch(baseUrl + url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : "Bearer " + GetToken() 
        },
    })
    .then((response) => (CheckStatus(response, dispatch)))
}


export function Put(dispatch, url, body) {
    return Fetch(dispatch, url, {
        method: 'PUT',
        body: JSON.stringify(body)
    })
}