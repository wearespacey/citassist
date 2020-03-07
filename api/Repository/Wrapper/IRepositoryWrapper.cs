namespace api.Repository
{
    public interface IRepositoryWrapper
    {
        IAccessPointRepository AccessPoint { get; }
        IAccountRepository Account { get; }
        void Save();
    }
}