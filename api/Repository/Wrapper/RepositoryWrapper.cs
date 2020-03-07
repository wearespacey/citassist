using api.Model;

namespace api.Repository
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private CitAssistContext _citAssistContext;
        private IAccessPointRepository _accessPoint;
        private IAccountRepository _account;

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

        public IAccountRepository Account
        {
            get
            {
                if (_account == null)
                {
                    _account = new AccountRepository(_citAssistContext);
                }

                return _account;
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