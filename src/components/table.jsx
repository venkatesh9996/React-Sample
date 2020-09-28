import React from 'react';
import { Button } from 'react-bootstrap';
import { Table,Input } from 'reactstrap';
const Tablebody = (props) => {

    const rows = props.data.map((rowd, index) => {
        return (

            <tr key={index}>
                <td>{rowd.isEdit ?  <Input type="text" value={rowd.name} onChange={(event) => props.ontypeChange(index, rowd, event)} /> : rowd.name}</td>
                <td>{rowd.job}</td>
                {
                rowd.isRemove === true ? <td align="center">{rowd.isRemove === true ? <Button variant="danger" onClick={() => props.removeCharacter(index)}>Remove</Button> : ''}</td> 
                :<td></td> }
            </tr>

        )
    })
    return <tbody>{rows}</tbody>
}

const Tablehead = (props) => {
    const rows = props.meta.map((row, index) => {
        return (
            <React.Fragment key={index}>
                <th  >{row.field}</th>

            </React.Fragment>

        )
    });
    return <thead><tr key="1">{rows}{props.isRemove ? <th >Action </th> : null}</tr></thead>
};

const CustomTable = (props) => {

    const { data, meta, removeCharacter, ontypeChange ,isRemove} = props;
    return (
        <Table responsive striped  hover size="sm" bordered className="table table-border striped bordered hover">
            <Tablehead meta={meta} isRemove={isRemove}/>
            <Tablebody data={data} meta={meta} removeCharacter={removeCharacter} ontypeChange={ontypeChange} />
        </Table>
    )
}
export default CustomTable;