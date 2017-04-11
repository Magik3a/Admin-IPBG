
namespace AdminIPBG.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Enter your username")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Enter your password"), Required(true)]
        public string Password { get; set; }
    }
}