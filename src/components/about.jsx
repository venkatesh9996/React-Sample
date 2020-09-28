import React, { Component } from 'react';
import CustomTable from '../components/table'
import Jobsform from '../components/jobsform'

class About extends Component {


    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
                isRemove: true,
                isEdit: true,
                id: 1
            },
            {
                name: 'Mac',
                job: 'Bouncer',
                isRemove: false,
                isEdit: true,
                id: 2
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
                isRemove: true,
                isEdit: true,
                id: 3
            },
            {
                name: 'Dennis',
                job: 'Bartender',
                isRemove: false,
                id: 4
            }
        ]

    }
    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters:
                characters.filter((character, i) => {
                    return i !== index;
                })
        });
    }
    ontypeChange = (cindex, data, event) => {
        const { characters } = this.state;

        const datafilter = characters.map((item, index) => {
            if (index === cindex) {
                item.name = event.target.value;
            }
            return item;
        })
        this.setState({ characters: datafilter });

    }
    handleformsSumbit = (data) => {
        this.setState({ characters: [...this.state.characters, data] });
    }

    render() {
        const isRemove = true;
        const metaData = [
            {
                field: 'name',
                type: 'textbox',
                id: 1,
            },
            {
                field: 'job',
                type: 'textbox',
                id: 2,
            }
        ]
        const { characters } = this.state;
        return (
            <div>
                <CustomTable data={characters} meta={metaData} isRemove={isRemove} removeCharacter={this.removeCharacter} ontypeChange={this.ontypeChange} />
                <Jobsform handleformsSumbit={this.handleformsSumbit} />
            </div>

        )
    }
}
export default About;