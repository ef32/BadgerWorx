
using Microsoft.EntityFrameworkCore;

namespace BadgerWorxApi.models
{
    public class LoginContext: DbContext
    {
        public LoginContext(DbContextOptions<LoginContext> options): base (options){}
    public DbSet<UserDetails> LoggedInUserDetails {get; set;} = null!;
    }

}