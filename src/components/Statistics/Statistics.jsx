import { PropTypes } from "prop-types"
import css from "../Statistics/Statistics.module.css"

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    return <div className={css.statWrapper}>
        <ul>
            <li className={css.statItem}>Good: {good}</li>
            <li className={css.statItem}>Neutral: {neutral}</li>
            <li className={css.statItem}>Bad: {bad}</li>
            <li className={css.statItem}>Total: {total()}</li>
            <li className={css.statItem}>Positive feedback: {Math.round(positivePercentage())}%</li>
        </ul>
        
    </div>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}