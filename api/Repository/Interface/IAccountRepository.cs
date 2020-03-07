using System.Threading.Tasks;
using api.DTO.Request;
using api.Model;

namespace api.Repository
{
    public interface IAccountRepository : IRepository<Account>
    {
        Task<bool> SignIn(string login, string password);
    }
}