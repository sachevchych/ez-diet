import React, {useState} from "react";
import styles from "./Select.module.css"
import Input from "../Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Select(props) {
    const [value, setValue] = useState("Number 4");
    const [hidden, setHidden] = useState(true);

    function selectHandler(target) {
        setValue(target.textContent)
        dropDown()
    }

    function dropDown() {
        setHidden(!hidden)
    }

    return (
        <div className={styles.Select}>
            <div className={styles.SelectInputGroup}>
                <label className={styles.Label} htmlFor={'TODO'}>{props.label}</label>
                <div className={styles.SelectInputWrap} onClick={() => dropDown()}>
                    <input
                        type="text"
                        className={styles.SelectInput}
                        id={"TODO"}
                        value={value}
                        readOnly={true}
                        placeholder={props.placeholder}
                        onChange={props.onChange}
                    />
                    <span className={styles.SelectInputSuffix}>
                        <FontAwesomeIcon
                            className={[styles.SelectInputIcon, !hidden ? styles.SelectInputIconOpen : null].join(' ')}
                            icon={faChevronUp} />
                    </span>
                </div>
            </div>

            <div className={styles.SelectDropdownWrap}>
                <div className={[styles.SelectDropdown, "shadow", hidden ? null : styles.SelectDropdownOpen].join(' ')}>
                    <ul className={styles.SelectOptionList}>
                        {!props.data ? null : props.data.map((option, key) => {
                            return <li
                                className={[styles.SelectOption, (option.label === value) ? styles.SelectOptionSelected : null].join(' ')}
                                key={key}
                                id={option.value}
                                onClick={(event => selectHandler(event.target))}
                            >{option.label}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Select