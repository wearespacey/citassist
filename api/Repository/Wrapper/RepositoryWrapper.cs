using api.Model;

namespace api.Repository
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private CitAssistContext _citAssistContext;
        private IAccessPointRepository _accessPoint;        

        public IAccessPointRepository AccessPoint
        {
            get
            {
                if (_accessPoint == null)
                {
                    _accessPoint = new AccessPointRepository(_citAssistContext);
                }

                return _accessPoint;
            }
        }

        public RepositoryWrapper(CitAssistContext citAssistContext)
        {
            _citAssistContext = citAssistContext;
        }

        public void Save()
        {
            _citAssistContext.SaveChanges();
        }
    }
}