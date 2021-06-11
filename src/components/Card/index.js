import React from 'react';
//import React, {useState} from 'react';


function Card() {

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div class="title has-text-centered">Placeholder</div>
                <div class="subtitle">£100.00</div>
            </div>

        </div>
    );
};

export default Card;

