import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    iconStyle: {
        minWidth: 32,
        minHeight: 32
    }
});

type Props = {
    icon: any
}

const IconComponent = (props: Props) => {
    const styles = useStyles();
    const Icon = props.icon;
    return (
      <div>
        <Icon className={styles.iconStyle} />
      </div>
    );
}

export default IconComponent