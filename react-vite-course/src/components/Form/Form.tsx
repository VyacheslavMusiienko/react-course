import React from 'react';

export default class Form extends React.Component {
    render(): React.ReactNode {
        return (
            <form>
                <div>
                    <h1>Form</h1>
                </div>
                <div>
                    <label>
                        First Name
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <input type="email" name="email" id="email" />
                    </label>
                </div>
                <div>
                    <label>
                        Pick your favorite flavor:
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" />
                        you nub
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" />
                        you n
                    </label>
                </div>
                <div>
                    <label>
                        <input type="date" />
                        you n
                    </label>
                </div>
                <div>
                    <label>
                        <input type="file" />
                        you n
                    </label>
                </div>
            </form>
        );
    }
}
