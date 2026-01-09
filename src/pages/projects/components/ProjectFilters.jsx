import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ProjectFilters = ({ onFilterChange, onSearchChange, onReset }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedTeamSize, setSelectedTeamSize] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const technologyOptions = [
    { value: '', label: 'All Technologies' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'PostgreSQL', label: 'PostgreSQL' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Redis', label: 'Redis' },
    { value: 'Docker', label: 'Docker' },
    { value: 'Kubernetes', label: 'Kubernetes' },
    { value: 'AWS', label: 'AWS' },
    { value: 'GraphQL', label: 'GraphQL' },
    { value: 'Microservices', label: 'Microservices' }
  ];

  const teamSizeOptions = [
    { value: '', label: 'All Team Sizes' },
    { value: '1-3', label: '1-3 Members' },
    { value: '4-6', label: '4-6 Members' },
    { value: '7-10', label: '7-10 Members' },
    { value: '10+', label: '10+ Members' }
  ];

  const durationOptions = [
    { value: '', label: 'All Durations' },
    { value: '0-6', label: '0-6 Months' },
    { value: '6-12', label: '6-12 Months' },
    { value: '12-24', label: '1-2 Years' },
    { value: '24+', label: '2+ Years' }
  ];

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'Production', label: 'Production' },
    { value: 'Development', label: 'Development' },
    { value: 'Archived', label: 'Archived' }
  ];

  const handleSearch = (e) => {
    const value = e?.target?.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleTechChange = (value) => {
    setSelectedTech(value);
    onFilterChange({ technology: value, teamSize: selectedTeamSize, duration: selectedDuration, status: selectedStatus });
  };

  const handleTeamSizeChange = (value) => {
    setSelectedTeamSize(value);
    onFilterChange({ technology: selectedTech, teamSize: value, duration: selectedDuration, status: selectedStatus });
  };

  const handleDurationChange = (value) => {
    setSelectedDuration(value);
    onFilterChange({ technology: selectedTech, teamSize: selectedTeamSize, duration: value, status: selectedStatus });
  };

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
    onFilterChange({ technology: selectedTech, teamSize: selectedTeamSize, duration: selectedDuration, status: value });
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedTech('');
    setSelectedTeamSize('');
    setSelectedDuration('');
    setSelectedStatus('');
    onReset();
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 mb-6 md:mb-8">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <Icon name="Filter" size={24} color="var(--color-primary)" />
        <h2 className="text-lg md:text-xl font-bold text-foreground font-mono-heading">
          Filter Projects
        </h2>
      </div>

      <div className="space-y-4">
        <Input
          type="search"
          placeholder="Search projects by name, description, or technology..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select
            label="Technology Stack"
            options={technologyOptions}
            value={selectedTech}
            onChange={handleTechChange}
            searchable
          />

          <Select
            label="Team Size"
            options={teamSizeOptions}
            value={selectedTeamSize}
            onChange={handleTeamSizeChange}
          />

          <Select
            label="Project Duration"
            options={durationOptions}
            value={selectedDuration}
            onChange={handleDurationChange}
          />

          <Select
            label="Status"
            options={statusOptions}
            value={selectedStatus}
            onChange={handleStatusChange}
          />
        </div>

        <div className="flex justify-end">
          <Button
            variant="outline"
            iconName="RotateCcw"
            iconPosition="left"
            onClick={handleReset}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;