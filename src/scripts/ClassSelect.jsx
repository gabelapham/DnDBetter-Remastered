import React from 'react'
import './scripts.css'

const ClassSelect = ({trig, setTrig, set, curr}) => {
    var i; // class selection var
    return (trig) ? (
        <div className='class_popup'>
            <div className='class_inside'>
            <   select id='thisclass' onChange={() => i = thisclass.value}>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Bard">Bard</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Druid">Druid</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Monk">Monk</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Wizard">Wizard</option>
                </select>

                <button onClick={() => setTrig(false)}>Cancel</button>
                <button onClick={() => {
                    set(i)
                    setTrig(false)
                }}>Confirm</button>
            </div>
        </div>
        ) : ""
}

export default ClassSelect