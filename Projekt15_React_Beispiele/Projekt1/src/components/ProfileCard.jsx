const url = "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=";
const color = "#d8a13b";

export default function ProfileCard() {
    return(
        <>
            <img src={url} alt="Profile" style={{ height: "100px" }} />
            <h3 style={{ color: color }}>Paul Summerauer</h3>
            <p style={{ color: color }}>IT-HAK-Schüler</p>
        </>
    );
}