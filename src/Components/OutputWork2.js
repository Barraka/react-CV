import React from 'react'

function OutputWork2(props) {
    function deleteItem(e) {
        const target=e.currentTarget.parentElement.parentElement;
        const id=target.getAttribute('data-id');
        props.removeWorkItem(id);
    }
    function modifyItem(e) {
        const target=e.currentTarget.parentElement.parentElement;
        const id=target.getAttribute('data-id');

        const cname = document.querySelector('#cname');
        const position = document.querySelector('#position');
        const start = document.querySelector('#start');
        const end = document.querySelector('#end');
        const task = document.querySelector('#task');

        const companyName = target.querySelector('.companyName');
        const positionName = target.querySelector('.positionName');
        const dateFrom = target.querySelector('.dateFrom');
        const dateTo = target.querySelector('.dateTo');
        const tasks = target.querySelector('.tasks');

        let dFrom = new Date(dateFrom.textContent.trim());
        let dTo = new Date(dateTo.textContent.trim());
        let stringFrom=dFrom.getFullYear()+'-'+('0'+(dFrom.getMonth()+1)).slice(-2)+'-'+('0'+dFrom.getDate()).slice(-2);
        let stringTo=dTo.getFullYear()+'-'+('0'+(dTo.getMonth()+1)).slice(-2)+'-'+('0'+dTo.getDate()).slice(-2);

        cname.setAttribute('data-id', id);
        cname.value=companyName.textContent;
        position.value=positionName.textContent;
        start.value=stringFrom;
        end.value=stringTo;
        task.value=tasks.textContent;
    }

    const output = props.info.map(x=> {

        return (
            <div className="itemWork" key={x.id} data-id={x.id}>
                <div className='editWrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" onClick={modifyItem}><path d="M6.625 21q-.7 0-1.162-.462Q5 20.075 5 19.375V4.625q0-.7.463-1.163Q5.925 3 6.625 3H14.5L19 7.5v3.6h-1V8h-4V4H6.625q-.25 0-.437.188Q6 4.375 6 4.625v14.75q0 .25.188.437.187.188.437.188h4.65v1ZM6 20V4v16Zm11.375-5.425.625.6-3.85 3.85v1.05h1.05l3.85-3.85.625.625-4.1 4.1h-2.3v-2.275Zm2.3 2.275-2.3-2.275L18.55 13.4q.225-.225.563-.225.337 0 .562.225l1.175 1.175q.225.225.225.562 0 .338-.225.563Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" onClick={deleteItem}><path d="M7.625 20q-.675 0-1.15-.475Q6 19.05 6 18.375V6H5V5h4v-.775h6V5h4v1h-1v12.375q0 .7-.462 1.163-.463.462-1.163.462ZM17 6H7v12.375q0 .275.175.45t.45.175h8.75q.25 0 .437-.188.188-.187.188-.437ZM9.8 17h1V8h-1Zm3.4 0h1V8h-1ZM7 6v13-.625Z"/></svg>
                </div>
                <div className='positionName'>{x.position}</div>
                <div className='companyName subsectionLine'>{x.company}</div>
                <div className="dates subsectionLine">
                    <span>From: </span><span className='dateFrom workDate'> {x.from}</span>
                    <span>To:  </span><span className='dateTo workDate'> {x.to}</span>
                </div>
                <div className='tasks subsectionLine'>{x.tasks}</div>
            </div>
        )
        

    })
    if(!output.length) {
        return (
            <div className="outputSection"><div className="itemWork">You can add information in the Work section by filling out the corresponding form.</div></div>
        )
    }
    return (
        <div className='outputSection'>
            <div className='sectionTitle'>WORK EXPERIENCE</div>
            {output}
        </div>
    )
}

export default OutputWork2