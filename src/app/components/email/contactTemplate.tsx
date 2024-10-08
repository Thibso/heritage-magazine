interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  speciality: string;
  manufacturerName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
  lastname,
  email,
  phone,
  speciality,
  manufacturerName,
  message,
}) => (
  <div>
    <h2>Contact via (H)ERITAGE Magazine</h2>
    <p>Nom : {lastname}</p>
    <p>Prénom : {firstname}</p>
    <p>E-mail : {email}</p>
    <p>Téléphone : {phone}</p>
    {speciality ? <p>Spécialité : {speciality}</p> : null}
    {manufacturerName ? <p>Nom du laboratoire : {manufacturerName}</p> : null}
    <p>Message : {message}</p>
  </div>
);
