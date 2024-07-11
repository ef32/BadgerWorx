using Microsoft.AspNetCore.Mvc;
using BadgerWorxApi.models;
using System.Diagnostics;

namespace BadgerWorxApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly LoginContext _context;

        public LoginController(LoginContext context)
        {
            _context = context;
            if (!this.UserDetailsExists((long) 2345)) {
            _context.LoggedInUserDetails.Add(new UserDetails {Id = 2345, FirstName = "John", LastName = "Doe", DateOfBirth = new DateTime(1983, 3, 11, 0, 0, 0)});
            _context.SaveChangesAsync();
            }
        }



        // POST: api/Login
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserDetails>> PostUserDetails([FromBody] User user)
        {
            if (user.UserName == "johndoe@xxx.com" && user.Password == "aliceandbob") {
             var userDetails = await _context.LoggedInUserDetails.FindAsync((long)2345);
            if (userDetails == null)
            {
                return NotFound();
            }

            return userDetails;
            }
            return NotFound();
        }

        private bool UserDetailsExists(long id)
        {
            return _context.LoggedInUserDetails.Any(e => e.Id == id);
        }
    }
}
