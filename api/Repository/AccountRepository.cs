using System.Linq;
using System.Threading.Tasks;
using api.DTO.Request;
using api.Model;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class AccountRepository : Repository<Account>, IAccountRepository
    {
        private readonly CitAssistContext _context;
        public AccountRepository (CitAssistContext context) : base(context) 
        {
            _context = context;   
        }

        public async Task<bool> SignIn(string login, string password)
        {
            
            return await _context.Accounts.AnyAsync(a => a.Login == login && a.Password == password);
        }
    }
}