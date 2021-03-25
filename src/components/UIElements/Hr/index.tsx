import useStyles from './HrStyles';

export interface HrProps {
    className?: string;
}

const Hr: React.FC<HrProps> = ({ className }) => {
    const classes = useStyles();
    return <hr className={`${classes.Hr} ${className}`} />;
};

export default Hr;
