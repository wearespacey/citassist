using System.Collections.Generic;
using System.Threading.Tasks;
using api.Model;

namespace api.Repository
{
    public interface IAccessPointRepository : IRepository<AccessPoint> 
    {
        Task<IEnumerable<AccessPoint>> GetAllAccessPointAsync();
    }
}