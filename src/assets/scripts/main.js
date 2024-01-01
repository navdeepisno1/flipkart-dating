$(document).ready(function () {
    set_states_card()
    set_best_males()
    set_best_females()
});

function set_states_card() {
    states_list = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
    ]

    c = document.getElementById("states-card-container");
    card_template = `<ul style="padding:0;overflow-x:auto;white-space: nowrap;">`;

    states_list.forEach((state_name) => {
        card_template = card_template + `
        <li style="display:inline-block; background: orange; padding: 6px 16px;margin:6px;color:white;border-radius:24px;font-weight:900;">${state_name}</li>
        `
    });

    card_template = card_template + "</ul>"

    c.innerHTML = card_template;
}

function get_product_container(product_info) {
    return `
    <li style="display:inline-block;padding: 12px;margin:6px;border-radius:24px;border:thin solid var(--secondary);">
    <img src="${product_info["profile_pic"]}" style="height:200px;border-radius:12px">
    <div class="row">
        <div class="col">${product_info["name"]} (${product_info["age"]})</div>                      
    </div>    
    <div>
        <button  type="button" class="btn" style="background:orange;color:white;width:100%">
            Rs.${product_info["price"]}/-
        </button>
    </div>
    </li>
    `
}

function set_best_males() {
    best_males_list = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]

    c = document.getElementById("best-males-container");
    card_template = `<ul style="padding:0;overflow-x:auto;white-space: nowrap;">`;

    best_males_list.forEach((best_male) => {
        sample_best_male = {
            "name": "David",
            "age": 26,
            "price": 7000,
            "profile_pic": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        }
        card_template = card_template + get_product_container(sample_best_male)
    });

    card_template = card_template + "</ul>"

    c.innerHTML = card_template;
}

function set_best_females() {

    best_females_list = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]

    c = document.getElementById("best-females-container");
    card_template = `<ul style="padding:0;overflow-x:auto;white-space: nowrap;">`;

    best_females_list.forEach((best_female) => {
        sample_best_female = {
            "name": "Lisa",
            "age": 21,
            "price": 6000,
            "profile_pic": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww"
        }
        card_template = card_template + get_product_container(sample_best_female)
    });

    card_template = card_template + "</ul>"

    c.innerHTML = card_template;
}