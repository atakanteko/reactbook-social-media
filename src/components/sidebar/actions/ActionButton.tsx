import IconComponent from '@/components/IconComponent';

type Props = {
    text: string,
    materialIcon: any
}
const ActionButton = (props: Props) => {
    const { materialIcon, text } = props;
    return (
        <div className="action-button">
            <IconComponent icon={materialIcon}/>
            <span className="action-button-text">
                {text}
            </span>
        </div>
    )
}

export default ActionButton