using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Model;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class AccessPointRepository : Repository<AccessPoint>, IAccessPointRepository
    {
        private readonly CitAssistContext _context;
        public AccessPointRepository (CitAssistContext context) : base(context) {}

        public async Task<IEnumerable<AccessPoint>> GetAllAccessPointAsync()
        {
            return await FindAll().OrderBy(ap => ap.Name)
                                  .ToListAsync();
        }

        public async Task<AccessPoint> GetByIdAsync(int id)
        {
            return await FindByCondition(ap => ap.Id == id).FirstAsync();
        }
    }
}